import Alert from "@/components/alert";

export default function Footer(preview) {
  return (
    <footer className="text-gray-400 text-sm text-center py-7 bg-gray-50 mt-14 border-t border-gray-300">
      <Alert preview={preview} />
      <div>Viafoura - Copyright © {new Date().getFullYear()}</div>
    </footer>
  );
}
