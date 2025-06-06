'use client';
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Vocês atendem empresas de qualquer segmento?',
      answer:
        'Sim! Adaptamos nossas estratégias conforme o público, produto e objetivo de cada cliente.',
    },
    {
      question: 'Por que investir em marketing é essencial?',
      answer:
        'O marketing conecta sua marca ao público certo, gera valor, aumenta visibilidade e impulsiona vendas de forma estratégica e mensurável.',
    },
    {
      question: 'Como a comunicação influencia no sucesso da marca?',
      answer:
        'Uma comunicação clara, criativa e consistente constrói confiança, fortalece identidade e diferencia sua marca da concorrência.',
    },
    {
      question: 'Como a tecnologia pode potencializar o marketing?',
      answer:
        'Utilizamos ferramentas modernas para automação, análise de dados, segmentação e criação de experiências mais relevantes e eficazes.',
    },
    {
      question: 'A Impacto360 é indicada para empresas iniciantes?',
      answer:
        'Com certeza. Nosso trabalho é adaptar soluções conforme o estágio da empresa, criando estratégias acessíveis e de alto impacto.',
    },
  ];

  return (
    <section className="bg-preto-profundo text-branco-neutro py-12 md:py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-azul-principal text-center">
        Perguntas Frequentes
      </h2>
      <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            onKeyDown={(e) => e.key === 'Enter' && toggle(index)}
            tabIndex={0}
            className={`bg-gray-900 rounded-xl p-4 md:p-6 cursor-pointer transition-all duration-300 mx-auto w-full max-w-xs md:max-w-none focus:outline focus:ring-2 focus:ring-azul-principal ${
              openIndex === index ? 'ring-2 ring-azul-principal bg-gray-800' : ''
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base md:text-lg font-semibold text-azul-principal">
                {faq.question}
              </h3>
              <span
                className={`text-azul-principal transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </div>
            {openIndex === index && (
              <div className="mt-2 text-sm text-gray-300 transition-all duration-300 ease-in-out">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
