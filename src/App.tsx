export default function App() {
  return (
    <div style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", fontFamily: "sans-serif", paddingBottom: "40px" }}>
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid #222" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ background: "#1a1a1a", border: "2px solid #C6FF00", padding: "8px 10px", borderRadius: "12px", fontSize: "20px" }}>✨</div>
          <div><div style={{ fontWeight: "900", fontSize: "22px", lineHeight: "1", color: "#C6FF00" }}>SAT KLIP</div><div style={{ fontSize: "11px", color: "#C084FC", fontWeight: "700", letterSpacing: "1px" }}>AI CLIP MAKER ID</div></div>
        </div>
        <div style={{ background: "#1a1a1a", padding: "8px 14px", borderRadius: "12px" }}>☰</div>
      </div>

      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "24px 20px", textAlign: "center" }}>
        {/* BADGE */}
        <div style={{ background: "#2a0a3a", border: "1px solid #7c3aed", display: "inline-block", padding: "8px 16px", borderRadius: "30px", fontSize: "13px", fontWeight: "700" }}>
          🟢 Khusus Creator Indonesia 🇮🇩 <span style={{ color: "#C6FF00" }}>• AI Clip Engine v2.0</span>
        </div>

        <h1 style={{ fontSize: "42px", lineHeight: "1.15", fontWeight: "900", margin: "22px 0 14px" }}>
          Ubah 1 Video Panjang<br/>Jadi <span style={{ color: "#C6FF00", textDecoration: "underline wavy #C084FC" }}>30 Clip Viral</span>
        </h1>
        <p style={{ color: "#bbb", fontSize: "16px", lineHeight: "1.6" }}>
          AI cariin momen terbaiknya, lu tinggal <b style={{ color: "white", textDecoration: "underline", textDecorationColor: "#C6FF00" }}>Approve & Download</b>. Dilengkapi auto crop 9:16, subtitle kekinian, dan export instan.
        </p>

        <a href="https://t.me/Satzly" style={{ display: "block", background: "#C6FF00", color: "black", padding: "16px", borderRadius: "16px", fontWeight: "900", fontSize: "18px", textDecoration: "none", marginTop: "24px" }}>✨ Coba Gratis Sekarang</a>
        <a href="#harga" style={{ display: "block", background: "#1a1a1a", color: "white", padding: "16px", borderRadius: "16px", fontWeight: "700", fontSize: "17px", textDecoration: "none", marginTop: "12px", border: "1px solid #333" }}>Lihat Paket & Harga →</a>

        <div style={{ textAlign: "left", marginTop: "32px", fontWeight: "800", fontSize: "14px", lineHeight: "1.6" }}>
          🔥 CONTOH HASIL POTONGAN AI SATKLIP (KLIK UNTUK PUTAR)<br/>
          <span style={{ fontWeight: "600", color: "#aaa" }}>👉 Geser ke samping • <span style={{ color: "#C084FC" }}>Rasio 9:16 Vertikal Otomatis</span></span>
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "14px", overflowX: "auto" }}>
          <div style={{ minWidth: "220px", background: "#1e40af", borderRadius: "16px", padding: "14px", textAlign: "left" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ background: "#000", padding: "4px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: "800", border: "1px solid #C6FF00" }}>🔥 98% FYP</span><span style={{ background: "#4c1d95", padding: "4px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>2.4M Views</span></div>
            <div style={{ marginTop: "20px", fontSize: "28px" }}>🦅</div><p style={{ fontSize: "13px", color: "#ddd" }}>Momen terbaik auto kepotong AI...</p>
          </div>
          <div style={{ minWidth: "220px", background: "#111", borderRadius: "16px", padding: "14px", textAlign: "left", border: "1px solid #333" }}>
            <span style={{ background: "#000", padding: "4px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: "800", border: "1px solid #C6FF00" }}>🔥 96% FYP</span>
            <div style={{ marginTop: "20px", fontSize: "28px" }}>🎬</div><p style={{ fontSize: "13px", color: "#ddd" }}>Subtitle + hook otomatis...</p>
          </div>
        </div>

        {/* HARGA */}
        <h2 id="harga" style={{ marginTop: "44px", fontSize: "26px", fontWeight: "900" }}>Aktivasi Paket Member</h2>
        <p style={{ color: "#999" }}>Pilih paket dan durasi yang lu mau, transfer via DANA, upload screenshot bukti, langsung aktif!</p>

        <div style={{ background: "#141414", border: "1px solid #333", borderRadius: "20px", padding: "18px", marginTop: "20px", textAlign: "left" }}>
          <b>① PILIH PAKET MEMBER</b>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginTop: "14px" }}>
            <div style={{ background: "#1a1a1a", padding: "14px", borderRadius: "14px" }}><b>Pemula</b><p style={{ color: "#999", fontSize: "12px" }}>480p • Ada WM</p></div>
            <div style={{ background: "#1a1a1a", padding: "14px", borderRadius: "14px", border: "2px solid #C6FF00" }}><b>Clipper •</b><p style={{ color: "#999", fontSize: "12px" }}>720p • Tanpa WM</p></div>
            <div style={{ background: "#1a1a1a", padding: "14px", borderRadius: "14px" }}><b>Pro</b><p style={{ color: "#999", fontSize: "12px" }}>1080p • Tanpa WM</p></div>
          </div>
        </div>

        <div style={{ background: "#141414", border: "1px solid #333", borderRadius: "20px", padding: "18px", marginTop: "14px", textAlign: "left" }}>
          <b>② PILIH DURASI WAKTU</b>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "14px" }}>
            <div style={{ background: "#1a1a1a", padding: "14px", borderRadius: "14px" }}><b>1 Hari</b><div style={{ color: "#C6FF00", fontWeight: "900" }}>Rp 10.000</div><span style={{ color: "#888", fontSize: "12px" }}>200 Klip</span></div>
            <div style={{ background: "#1a1a1a", padding: "14px", borderRadius: "14px" }}><b>3 Hari</b><div style={{ color: "#C6FF00", fontWeight: "900" }}>Rp 20.000</div><span style={{ color: "#888", fontSize: "12px" }}>200 Klip</span></div>
            <div style={{ background: "#1a1a1a", padding: "14px", borderRadius: "14px" }}><b>1 Bulan</b><div style={{ color: "#C6FF00", fontWeight: "900" }}>Rp 59.000</div><span style={{ color: "#888", fontSize: "12px" }}>200 Klip</span></div>
            <div style={{ background: "#1a1a1a", padding: "14px", borderRadius: "14px", border: "2px solid #C6FF00" }}><b>1 Tahun</b><div style={{ color: "#C6FF00", fontWeight: "900" }}>Rp 299.000</div><span style={{ color: "#888", fontSize: "12px" }}>200 Klip</span></div>
          </div>
        </div>

        <div style={{ background: "#1a1a1a", borderRadius: "20px", padding: "20px", marginTop: "14px" }}>
          <div style={{ background: "#2a3a00", border: "1px solid #C6FF00", padding: "14px", borderRadius: "14px", color: "#C6FF00", fontWeight: "800" }}>Kamu pilih: CLIPPER - 1 Bulan - Rp 59.000</div>
          <a href="https://t.me/Satzly" style={{ display: "block", background: "#229ED9", color: "white", padding: "16px", borderRadius: "14px", fontWeight: "900", textDecoration: "none", marginTop: "16px" }}>✈️ KIRIM BUKTI VIA TELEGRAM</a>
          <p style={{ color: "#888", fontSize: "12px", marginTop: "10px" }}>Butuh bantuan? Hubungi Admin via Telegram: @Satzly</p>
        </div>
      </div>
    </div>
  );
          }
