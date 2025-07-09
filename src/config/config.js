// Configuração do Convite de Casamento
const config = {
  data: {
    title: "Casamento Alisson & Larissa", // Nomes dos noivos
    description:
      "Vamos nos casar e convidamos você para celebrar este momento especial conosco.", // Descrição em português
    groomName: "Alisson",
    brideName: "Larissa",
    parentGroom: "Pais do Noivo",
    parentBride: "Pais da Noiva",
    date: "2025-10-12",
    maps_url: "https://maps.app.goo.gl/sAnyXvaHSB9X8QsZ6",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3949765662574!2d-38.5193924!3d-3.7237435999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7484ee0eea0e9%3A0x60a2dc7e36dcc8a5!2sIgreja%20de%20Nossa%20Senhora%20da%20Concei%C3%A7%C3%A3o%20da%20Prainha!5e0!3m2!1spt-BR!2sbr!4v1751733019234!5m2!1spt-BR!2sbr",
    time: "10:00 - 11:00 BRT",
    location: "Igreja de Nossa Senhora da Conceição da Prainha",
    address: "Av. Monsenhor Tabosa, S/N - Praia de Iracema, Fortaleza - CE, 60165-010",
    ogImage: "/images/og-image.jpg",
    favicon: "/images/favicon.ico",
    agenda: [
      {
        title: "Cerimônia de Casamento",
        date: "2025-10-11",
        startTime: "10:00",
        endTime: "11:00",
        location: "Igreja da Prainha",
        address: "Av. Monsenhor Tabosa, S/N - Praia de Iracema, Fortaleza - CE, 60165-010",
      },
      {
        title: "Recepção de Casamento",
        date: "2025-10-11",
        startTime: "10:00",
        endTime: "11:00",
        location: "Igreja da Prainha",
        address: "Av. Monsenhor Tabosa, S/N - Praia de Iracema, Fortaleza - CE, 60165-010",
      }
    ],
    audio: {
      src: "/audio/fulfilling-humming.mp3", // or /audio/nature-sound.mp3
      title: "Fulfilling Humming", // or Nature Sound
      autoplay: true,
      loop: true
    },
    banks: [
      {
        bank: "Nubank",
        accountNumber: "1234567890",
        accountName: "ALISSON",
      },
      {
        bank: "PicPay",
        accountNumber: "0987654321",
        accountName: "LARISSA",
      }
    ]
  }
};

export default config;
