import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const projects = db.getProjects();
    return NextResponse.json({ projects });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || !body.description || !body.indiarkRole) {
      return NextResponse.json(
        { error: "Missing required fields (title, description, indiarkRole)" },
        { status: 400 }
      );
    }

    const newProject = db.createProject({
      title: body.title.trim(),
      tagline: body.tagline?.trim() || "",
      description: body.description.trim(),
      synopsis: body.synopsis?.trim() || body.description.trim(),
      category: body.category || "FILMS",
      projectType: body.projectType || "Feature Film",
      language: body.language || "Tamil",
      genre: body.genre || "Action / Drama",
      year: body.year || "2024",
      indiarkRole: body.indiarkRole.trim(),
      posterUrl: body.posterUrl || "/images/projects/bheeshmar.svg",
      status: body.status || "Featured",
      published: body.published !== undefined ? Boolean(body.published) : true,
    });

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing project id" }, { status: 400 });
    }

    const updated = db.updateProject(id, updates);
    if (!updated) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, project: updated });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing project id" }, { status: 400 });
    }

    const deleted = db.deleteProject(id);
    if (!deleted) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, id });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
