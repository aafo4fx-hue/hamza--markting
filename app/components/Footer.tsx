export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
        <a href="#" className="flex items-center gap-2 font-black text-lg text-white">
          <span className="text-amber-400">◆</span>
          <span>تك ستور</span>
        </a>
        <p className="text-gray-500 text-sm md:mr-auto">© {new Date().getFullYear()} تك ستور. جميع الحقوق محفوظة.</p>
        <div className="flex gap-5">
          <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">سياسة الخصوصية</a>
          <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">الشروط والأحكام</a>
        </div>
      </div>
    </footer>
  );
}
