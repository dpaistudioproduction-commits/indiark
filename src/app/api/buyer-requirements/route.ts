import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const requirements = db.getBuyerRequirements();
    return NextResponse.json({ requirements });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch requirements" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.companyName || !body.contactPerson || !body.email || !body.detailedRequirement) {
      return NextResponse.json(
        { error: "Missing required fields (companyName, contactPerson, email, detailedRequirement)" },
        { status: 400 }
      );
    }

    const newReq = db.createBuyerRequirement({
      companyName: body.companyName.trim(),
      contactPerson: body.contactPerson.trim(),
      designation: body.designation?.trim() || "",
      email: body.email.trim(),
      mobile: body.mobile?.trim() || "",
      website: body.website?.trim() || "",
      countryTerritory: body.countryTerritory?.trim() || "",
      contentType: body.contentType || "Movies",
      languages: body.languages?.trim() || "",
      genre: body.genre?.trim() || "",
      numberOfTitles: body.numberOfTitles?.trim() || "",
      rightsRequired: body.rightsRequired?.trim() || "",
      territory: body.territory?.trim() || "",
      duration: body.duration?.trim() || "",
      timeline: body.timeline?.trim() || "",
      detailedRequirement: body.detailedRequirement.trim(),
      additionalInformation: body.additionalInformation?.trim() || "",
    });

    return NextResponse.json({ success: true, requirement: newReq }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to process requirement" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    const updated = db.updateBuyerRequirementStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: "Requirement not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, requirement: updated });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to update requirement" }, { status: 500 });
  }
}
