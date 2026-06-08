// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      <div className="container-site flex items-center justify-between py-5">
        <span className="text-[0.8125rem] font-medium tracking-tight text-[var(--color-text-primary)]">
          Sebastian Arias
        </span>
        <span className="text-xs text-[var(--color-text-muted)] tracking-wide">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}