import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "Bagaimana cara memesan makanan?",
      answer: "Anda dapat memesan makanan dengan mendaftar terlebih dahulu, kemudian memilih menu yang diinginkan dan menambahkannya ke keranjang. Setelah itu, lanjutkan ke checkout untuk menyelesaikan pesanan."
    },
    {
      question: "Apakah perlu reservasi untuk makan di tempat?",
      answer: "Untuk pengalaman terbaik, kami merekomendasikan reservasi terutama pada jam sibuk dan akhir pekan. Namun, kami juga menerima walk-in tergantung ketersediaan tempat."
    },
    {
      question: "Berapa lama waktu tunggu untuk pesanan?",
      answer: "Waktu tunggu rata-rata adalah 15-25 menit untuk makanan reguler dan 30-40 menit untuk menu spesial. Kami akan memberitahu estimasi waktu yang lebih akurat saat Anda memesan."
    },
    {
      question: "Apakah ada pilihan menu vegetarian?",
      answer: "Ya, kami menyediakan berbagai pilihan menu vegetarian dan vegan. Silakan tanyakan kepada staff kami atau lihat tanda khusus pada menu untuk pilihan vegetarian."
    },
    {
      question: "Metode pembayaran apa saja yang diterima?",
      answer: "Kami menerima pembayaran tunai, kartu kredit/debit, dan berbagai e-wallet seperti GoPay, OVO, DANA, dan LinkAja."
    },
    {
      question: "Apakah bisa pesan untuk acara khusus atau catering?",
      answer: "Ya, kami melayani pesanan untuk acara khusus dan catering. Silakan hubungi kami minimal 3 hari sebelumnya untuk diskusi menu dan arrangement."
    },
    {
      question: "Bagaimana kebijakan pembatalan pesanan?",
      answer: "Pembatalan dapat dilakukan maksimal 10 menit setelah pesanan dikonfirmasi. Untuk pembatalan setelah makanan mulai diproses, mungkin akan dikenakan biaya sesuai kebijakan restoran."
    },
    {
      question: "Apakah tersedia layanan delivery?",
      answer: "Saat ini kami fokus pada dine-in experience. Namun, Anda dapat melakukan takeaway dengan memesan terlebih dahulu melalui sistem online kami."
    },
    {
      question: "Bagaimana jika ada alergi makanan?",
      answer: "Mohon informasikan kepada staff kami tentang alergi atau dietary restriction yang Anda miliki. Tim dapur kami akan membantu menyesuaikan menu atau memberikan rekomendasi yang aman."
    },
    {
      question: "Apakah ada program loyalitas atau diskon?",
      answer: "Ya, kami memiliki program member dengan berbagai benefit dan diskon khusus. Tanyakan kepada staff kami untuk informasi lebih lanjut tentang cara bergabung."
    }
  ];

  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600">Temukan jawaban atas pertanyaan yang sering diajukan</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left bg-white hover:bg-gray-50 transition-colors p-6 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openItems[index] ? (
                      <ChevronUp size={24} className="text-gray-500" />
                    ) : (
                      <ChevronDown size={24} className="text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openItems[index] && (
                  <div className="bg-gray-50 px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Masih ada pertanyaan?</h2>
            <p className="text-gray-600 mb-6">
              Jika Anda tidak menemukan jawaban yang dicari, jangan ragu untuk menghubungi kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+6281234567890" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Hubungi Kami
              </a>
              <a 
                href="mailto:info@serendipity-restaurant.com" 
                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Email Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQPage;