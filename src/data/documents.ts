// Vite includes only explicitly linked source assets in the production bundle.
const documentUrls = import.meta.glob<string>(
  '/assets/studies/**/*.{pdf,png,jpg,jpeg,webp}',
  { eager: true, query: '?url', import: 'default' },
);

export function getDocumentUrl(path: string): string | undefined {
  return documentUrls[path];
}
