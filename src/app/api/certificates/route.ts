import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Certificate from '@/models/Certificate';

export async function GET() {
  try {
    await connectMongo();
    const certificates = await Certificate.find({});
    return NextResponse.json(certificates);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch certificates' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, image, provider } = await request.json();
    await connectMongo();
    const newCertificate = await Certificate.create({ name, image, provider });
    return NextResponse.json(newCertificate, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create certificate' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    await connectMongo();
    await Certificate.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Certificate deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete certificate' }, { status: 500 });
  }
}
