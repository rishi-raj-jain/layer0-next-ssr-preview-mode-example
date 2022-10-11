export default function handler(req, res) {
  if (req.method === "GET") {
    res.setPreviewData({ date: new Date().toString() });
    res.writeHead(307, { Location: `/` });
    res.end();
  }
}
