import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { content } from "../constants/content";
import "./Escala.css";

const ESCALA_ENDPOINT =
  "https://x8ki-letl-twmt.n7.xano.io/api:nOz_oSxB/escala_geral";
const MEMBROS_ENDPOINT =
  "https://x8ki-letl-twmt.n7.xano.io/api:nOz_oSxB/membros";

const Escala = () => {
  const { hero, info } = content.escala;
  const [escalaData, setEscalaData] = useState([]);
  const [membrosData, setMembrosData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define o mês atual como padrão (Ex: 4/2026)
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getUTCMonth() + 1}/${now.getUTCFullYear()}`;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [escalaRes, membrosRes] = await Promise.all([
          axios.get(ESCALA_ENDPOINT),
          axios.get(MEMBROS_ENDPOINT),
        ]);
        setEscalaData(escalaRes.data || []);
        setMembrosData(membrosRes.data || []);
      } catch (err) {
        setError("Erro ao carregar dados. Verifique a conexão.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const membrosMap = useMemo(() => {
    const map = {};
    membrosData.forEach((m) => {
      map[m.id] = m;
    });
    return map;
  }, [membrosData]);

  const getMembroInfo = (id) => {
    const actualId = typeof id === "object" ? id.id : id;
    const membro = membrosMap[actualId];
    return {
      nome: membro?.nome || "Nome não encontrado",
      foto: membro?.foto?.url || null,
    };
  };

  // GERADOR DE MESES DINÂMICO (ANO INTEIRO)
  const mesesDisponiveis = useMemo(() => {
    const meses = [];
    const ano = 2026; // Você pode mudar para new Date().getFullYear()
    for (let i = 0; i < 12; i++) {
      const data = new Date(ano, i, 1);
      meses.push({
        value: `${i + 1}/${ano}`,
        label: data.toLocaleDateString("pt-BR", {
          month: "long",
          year: "numeric",
        }),
      });
    }
    return meses;
  }, []);

  const filteredEscala = useMemo(() => {
    return escalaData
      .filter((item) => {
        if (!item.data_culto) return false;
        const d = new Date(item.data_culto);
        const itemMonth = `${d.getUTCMonth() + 1}/${d.getUTCFullYear()}`;
        return itemMonth === selectedMonth;
      })
      .sort((a, b) => new Date(a.data_culto) - new Date(b.data_culto));
  }, [escalaData, selectedMonth]);

  const renderSecao = (titulo, categoria, cor) => {
    // 1. Filtra por categoria
    const itensBrutos = filteredEscala.filter(
      (i) =>
        (i.categoria || i.tipo)
          ?.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") === categoria.toLowerCase(),
    );

    // 2. AGRUPAMENTO INTELIGENTE: Junta quem é do mesmo dia e mesmo culto
    const itensAgrupados = [];
    itensBrutos.forEach((item) => {
      const chave = `${item.data_culto}-${item.tipo_culto}`;
      const grupoExistente = itensAgrupados.find((g) => g.chave === chave);

      const listaIds = Array.isArray(item.membros_id)
        ? item.membros_id
        : [item.membros_id];

      if (grupoExistente) {
        grupoExistente.membros.push(...listaIds);
      } else {
        itensAgrupados.push({
          chave,
          data_culto: item.data_culto,
          tipo_culto: item.tipo_culto,
          membros: [...listaIds],
        });
      }
    });

    return (
      <div className="escala-secao" style={{ borderTop: `2px solid ${cor}` }}>
        <h2 className="secao-titulo" style={{ color: cor }}>
          {titulo}
        </h2>
        <div className="tabela-limpa">
          {itensAgrupados.length === 0 ? (
            <p className="vazio-msg">Nenhuma escala cadastrada.</p>
          ) : (
            itensAgrupados.map((item, idx) => (
              <div key={idx} className="linha-escala">
                <div className="info-data">
                  <span className="txt-dia">
                    {new Date(item.data_culto).toLocaleDateString("pt-BR", {
                      weekday: "short",
                      timeZone: "UTC",
                    })}
                  </span>
                  <span className="txt-num">
                    {new Date(item.data_culto).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      timeZone: "UTC",
                    })}
                  </span>
                </div>
                <div className="info-culto">
                  <span className="badge-tipo">{item.tipo_culto}</span>
                </div>
                <div className="info-membros">
                  {item.membros.map((mId, mIdx) => {
                    const info = getMembroInfo(mId);
                    return (
                      <div key={mIdx} className="membro-mini">
                        <div className="membro-avatar">
                          {info.foto ? (
                            <img src={info.foto} alt="foto" />
                          ) : (
                            <span className="avatar-placeholder">?</span>
                          )}
                        </div>
                        <div className="nome-grupo">
                          <span className="nome-txt">{info.nome}</span>
                          {/* AGORA SIM: O primeiro do grupo Abre, o segundo Fecha */}
                          {categoria === "diacono" && (
                            <span className="funcao-txt">
                              {mIdx === 0 ? "Abre a Igreja" : "Fecha a Igreja"}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  if (loading) return <div className="loading-state">Carregando Escala...</div>;

  return (
    <div className="escala-page">
      <section className="filtro-topo">
        <label>Mês de Referência:</label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="month-select"
        >
          {mesesDisponiveis.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
      </section>

      <div className="escala-container">
        {renderSecao("Mídia", "midia", "#8b5cf6")}
        {renderSecao("Cinturião", "cinturiao", "#f59e0b")}
        {renderSecao("Diáconos", "diacono", "#10b981")}
      </div>
    </div>
  );
};

export default Escala;
