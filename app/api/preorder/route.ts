import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, city, color, storage, paymentMethod, installmentMonths } = body;

    if (!fullName || !phone || !city || !color || !storage || !paymentMethod) {
      return NextResponse.json({ error: "جميع الحقول مطلوبة" }, { status: 400 });
    }

    // هنا يمكن ربط قاعدة البيانات أو CRM
    console.log("New preorder:", { fullName, phone, city, color, storage, paymentMethod, installmentMonths });

    return NextResponse.json({ success: true, message: "تم استلام حجزك بنجاح" });
  } catch {
    return NextResponse.json({ error: "حدث خطأ، يرجى المحاولة مجددًا" }, { status: 500 });
  }
}
