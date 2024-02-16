const API_ROOT = "http://localhost:3000";

export function serverPath(path: string) {
  return `${API_ROOT}${path}`;
}