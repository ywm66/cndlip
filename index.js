export default {
  async fetch(request, env, ctx) {
    // 手动用 \n 换行
    const text = ".rainyun.com\n*.*.rainyun.com\n*.baidu.com\n";

    return new Response(text, {
      headers: {
        // 关键：纯文本
        "Content-Type": "text/plain; charset=utf-8",
        // 禁止缓存，方便调试
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }
    });
  }
}
