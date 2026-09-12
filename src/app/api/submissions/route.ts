import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const submissions = db.getSubmissions();
    return NextResponse.json({ submissions });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic server-side validation
    if (!body.applicantName || !body.email || !body.projectName || !body.synopsis) {
      return NextResponse.json(
        { error: "Missing required fields (applicantName, email, projectName, synopsis)" },
        { status: 400 }
      );
    }

    const newSub = db.createSubmission({
      applicantName: body.applicantName.trim(),
      companyName: body.companyName?.trim() || "",
      designation: body.designation?.trim() || "",
      email: body.email.trim(),
      mobile: body.mobile?.trim() || "",
      city: body.city?.trim() || "",
      country: body.country?.trim() || "India",
      website: body.website?.trim() || "",
      projectName: body.projectName.trim(),
      contentType: body.contentType || "Feature Film",
      language: body.language || "Multi-lingual",
      genre: body.genre || "",
      duration: body.duration || "",
      yearOfProduction: body.yearOfProduction || "2024",
      productionStatus: body.productionStatus || "Completed",
      synopsis: body.synopsis.trim(),
      director: body.director?.trim() || "",
      producer: body.producer?.trim() || "",
      cast: body.cast?.trim() || "",
      trailerLink: body.trailerLink?.trim() || "",
      posterFilename: body.posterFilename || "",
      additionalLinks: body.additionalLinks?.trim() || "",
      rights: body.rights || {
        ottRights: true,
        digitalRights: true,
        satelliteRights: true,
        musicRights: false,
        inFlightRights: true,
        dubRights: true,
        remakeRights: false,
        internationalRights: true,
      },
      territory: body.territory || "Worldwide",
      authorizationSigned: Boolean(body.authorizationSigned),
      authorizationFilename: body.authorizationFilename || "",
    });

    return NextResponse.json({ success: true, submission: newSub }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to process submission" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    const updated = db.updateSubmissionStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, submission: updated });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to update submission" }, { status: 500 });
  }
}
