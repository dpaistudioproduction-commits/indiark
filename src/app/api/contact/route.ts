import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const enquiries = db.getContactEnquiries();
    return NextResponse.json({ enquiries });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch enquiries" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    const newEnq = db.createContactEnquiry({
      name: body.name.trim(),
      company: body.company?.trim() || "",
      designation: body.designation?.trim() || "",
      email: body.email.trim(),
      mobile: body.mobile?.trim() || "",
      enquiryType: body.enquiryType || "GENERAL",
      message: body.message.trim(),
    });

    return NextResponse.json({ success: true, enquiry: newEnq }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to send enquiry" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    const updated = db.updateContactStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: "Enquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, enquiry: updated });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to update enquiry" }, { status: 500 });
  }
}
