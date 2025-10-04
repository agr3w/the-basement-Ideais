const steps = [
  {
    label: "Qual seu nome?",
    field: "name",
    placeholder: "Digite seu nome",
    maxLength: 32,
    helperText: "Máximo 32 caracteres.",
    validate: (value) =>
      value.length >= 2 && value.length <= 32
        ? ""
        : "O nome deve ter entre 2 e 32 caracteres.",
  },
  {
    label: "Qual seu e-mail?",
    field: "email",
    placeholder: "Digite seu e-mail",
    type: "email",
    helperText: "Digite um e-mail válido.",
    validate: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Digite um e-mail válido.",
  },
  {
    label: "Conte pra gente sua ideia ou desafio!",
    field: "message",
    placeholder: "Descreva sua ideia, projeto ou desafio...",
    multiline: true,
    rows: 4,
    maxLength: 500,
    helperText: "Máximo 500 caracteres.",
    validate: (value) =>
      value.length >= 10 && value.length <= 500
        ? ""
        : "A mensagem deve ter entre 10 e 500 caracteres.",
  },
];

export default steps;