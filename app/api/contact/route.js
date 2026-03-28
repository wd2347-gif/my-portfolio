export async function POST(req) {
  const body = await req.json();

  console.log("받은 데이터:", body);

  return new Response(JSON.stringify({ message: "메시지 전송 완료!" }), {
    status: 200,
  });
}
