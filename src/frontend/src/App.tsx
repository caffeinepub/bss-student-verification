const DEFAULT_STUDENT = {
  regNo: "949151",
  name: "RAKESH HARISHCHANDRA RAJBHAR",
  instituteName: "GHC HOSPITALS AND INSTITUTE",
  instituteAddress: "NEXT TO BHARAT GEAR COMPANY, KAUSA-MUMBRA, MUMBAI-400612",
  course: "BSS DIPLOMA IN OPERATION THEATRE TECHNOLOGY",
  duration: "TWO YEARS - 2023-2025",
};

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="inline-block w-4 h-4 mx-1"
      aria-hidden="true"
    >
      <path d="M12 2L14.09 8.26H21L15.47 12.14L17.56 18.4L12 14.52L6.44 18.4L8.53 12.14L3 8.26H9.91L12 2Z" />
    </svg>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <tr className="border-b border-gray-200 last:border-b-0">
      <td
        className="py-2 px-3 font-bold text-sm whitespace-nowrap align-top"
        style={{ color: "#333", minWidth: "180px", width: "200px" }}
      >
        {label}:
      </td>
      <td
        className="py-2 px-3 text-sm font-semibold align-top"
        style={{ color: "#111" }}
      >
        {value}
      </td>
    </tr>
  );
}

export default function App() {
  const info = DEFAULT_STUDENT;

  const currentYear = new Date().getFullYear();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#F5F0DC" }}
    >
      {/* ─── HEADER BANNER ─────────────────────────────────────── */}
      <header style={{ backgroundColor: "#CC0000" }} className="w-full">
        <div
          className="flex items-center gap-3 px-3 py-2"
          style={{ minHeight: "80px" }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/assets/generated/bss-emblem-transparent.dim_120x120.png"
              alt="BSS Emblem"
              className="w-16 h-16 object-contain rounded-full"
              style={{
                background: "radial-gradient(circle, #FFD700 0%, #CC8800 100%)",
                padding: "2px",
              }}
            />
          </div>

          {/* Center text */}
          <div className="flex-1 text-center">
            <div
              className="font-outfit font-black tracking-wide leading-tight"
              style={{
                color: "#FFD700",
                fontSize: "clamp(1.1rem, 3.5vw, 2.2rem)",
                textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
                letterSpacing: "0.05em",
              }}
            >
              BHARAT SEVAK SAMAJ EXAMINATIONS
            </div>
            <div className="flex items-center justify-center mt-1">
              <span style={{ color: "#FFD700" }}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </span>
            </div>
          </div>

          {/* Right side logo (mirror) */}
          <div className="flex-shrink-0">
            <img
              src="/assets/generated/bss-emblem-transparent.dim_120x120.png"
              alt="BSS Emblem"
              className="w-16 h-16 object-contain rounded-full"
              style={{
                background: "radial-gradient(circle, #FFD700 0%, #CC8800 100%)",
                padding: "2px",
              }}
            />
          </div>
        </div>
      </header>

      {/* ─── SUBTITLE BARS ──────────────────────────────────────── */}
      <div
        className="w-full text-center py-1 text-sm font-semibold"
        style={{
          backgroundColor: "#003366",
          color: "#FFFFFF",
          fontSize: "0.75rem",
          letterSpacing: "0.03em",
        }}
      >
        A National Development Agency Promoted by Government of India
      </div>
      <div
        className="w-full text-center py-1 text-sm font-bold"
        style={{
          backgroundColor: "#006BB0",
          color: "#FFFFFF",
          fontSize: "0.75rem",
          letterSpacing: "0.08em",
        }}
      >
        LOKA SAMASTHA SUKHINO BHAVANTHU
      </div>

      {/* ─── MAIN CONTENT ───────────────────────────────────────── */}
      <main
        className="flex-1 py-4 px-3 sm:px-6"
        style={{ backgroundColor: "#F5F0DC" }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Student Information Card */}
          <div
            className="border-2 rounded"
            style={{ borderColor: "#00B0C8", backgroundColor: "#FFFFFF" }}
          >
            {/* Card Header */}
            <div
              className="flex items-center justify-between px-4 py-2"
              style={{ backgroundColor: "#00B0C8" }}
            >
              <h2 className="font-bold text-base" style={{ color: "#003366" }}>
                BSS Student Information
              </h2>
              <button
                type="button"
                className="text-sm font-bold px-3 py-1 rounded"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#00B0C8",
                  border: "1px solid #00B0C8",
                  cursor: "pointer",
                }}
                onClick={() => window.history.back()}
              >
                BACK
              </button>
            </div>

            {/* Table */}
            <table className="w-full border-collapse">
              <tbody>
                <InfoRow label="REG NO" value={info.regNo} />
                <InfoRow label="NAME" value={info.name} />
                <InfoRow label="INSTITUTE NAME" value={info.instituteName} />
                <InfoRow
                  label="INSTITUTE ADDRESS"
                  value={info.instituteAddress}
                />
                <InfoRow label="COURSE" value={info.course} />
                <InfoRow label="DURATION" value={info.duration} />
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer className="w-full">
        {/* Visitor count bar */}
        <div
          className="flex items-center justify-center gap-2 py-2"
          style={{ backgroundColor: "#F5F0DC" }}
        >
          <span className="text-sm font-semibold" style={{ color: "#333" }}>
            Visitor Count:
          </span>
          <span
            className="px-2 py-0.5 font-bold text-sm rounded"
            style={{
              backgroundColor: "#FF6600",
              color: "#FFFFFF",
              fontFamily: "monospace",
              letterSpacing: "0.1em",
            }}
          >
            5260285
          </span>
        </div>

        {/* Copyright bar */}
        <div
          className="w-full text-center py-2 px-4 text-xs"
          style={{
            backgroundColor: "#003366",
            color: "#FFFFFF",
          }}
        >
          Central Bharat Sevak Samaj, BSS Bhavan, Central Office, BB-11, Greater
          Kailash-3, New Delhi - 110048, India | © All Rights Reserved.
        </div>

        {/* Caffeine attribution */}
        <div
          className="w-full text-center py-1 text-xs"
          style={{ backgroundColor: "#F5F0DC", color: "#888" }}
        >
          © {currentYear}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
