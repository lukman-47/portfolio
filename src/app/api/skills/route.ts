import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Skill from '@/models/Skill';

export async function GET() {
  try {
    await connectMongo();
    const skills = await Skill.find({});
    return NextResponse.json(skills);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name } = await request.json();
    await connectMongo();
    const newSkill = await Skill.create({ name });
    return NextResponse.json(newSkill, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create skill' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    await connectMongo();
    await Skill.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Skill deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete skill' }, { status: 500 });
  }
}
