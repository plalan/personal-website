export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#666]">
          &copy; {new Date().getFullYear()} Lalan Prasad. All rights reserved.
        </p>
        <p className="text-xs text-[#444]">
          Bengaluru, Karnataka, India
        </p>
      </div>
    </footer>
  );
}
