import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-[#f8fafc] pb-20">
      {/* Navbar Simples */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-900 font-black italic group">
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> VOLTAR PARA A LOJA
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-12">
        <div className="bg-white rounded-[40px] shadow-xl p-10 lg:p-16 border border-slate-100">
          <div className="flex items-center gap-4 mb-8 text-blue-600">
            <ShieldCheck size={40} />
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase italic">
              Política de Privacidade
            </h1>
          </div>

          <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
            <p>
              A <strong>LS SHOP</strong> preza pela transparência e segurança de seus usuários. 
              Esta página descreve como tratamos as informações no nosso site.
            </p>

            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase mb-3">1. Coleta de Dados</h2>
              <p>
                Informamos que a <strong>LS SHOP não coleta, armazena ou processa dados pessoais</strong> dos usuários 
                que navegam em nosso site. Não utilizamos formulários de cadastro, sistemas de login ou bancos de dados 
                para capturar informações privadas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase mb-3">2. Links de Afiliados</h2>
              <p>
                Nosso site funciona como um portal de curadoria. Ao clicar em "Adquirir Agora", você será redirecionado 
                para lojas parceiras oficiais (como Mercado Livre ou Magazine Luiza). 
                <strong> Toda a transação de compra, pagamento e entrega é realizada diretamente nos sites dessas lojas</strong>, 
                seguindo as políticas de privacidade delas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase mb-3">3. Cookies</h2>
              <p>
                Podemos utilizar cookies básicos apenas para melhorar a performance do site e entender o volume de visitas 
                através de ferramentas de análise (como o Google Analytics), sem identificar o usuário individualmente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase mb-3">4. Contato</h2>
              <p>
                Se você tiver qualquer dúvida sobre esta política, pode entrar em contato conosco através do nosso 
                canal oficial de atendimento via WhatsApp disponível no site.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm font-bold uppercase">
            Última atualização: Abril de 2026
          </div>
        </div>
      </div>
    </main>
  );
}