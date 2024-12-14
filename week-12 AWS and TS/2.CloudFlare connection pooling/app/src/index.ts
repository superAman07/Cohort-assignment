import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env {
    DATABASE_URL: string;
    DIRECT_URL: string;
}

export default {
    async fetch(
        request: Request,
        env: Env,
        ctx: ExecutionContext
    ): Promise<Response> {
        const prisma = new PrismaClient({
            datasourceUrl: env.DATABASE_URL,
        }).$extends(withAccelerate());

        try {
            const log = await prisma.log.create({
                data: {
                    level: 'Info',
                    message: 'Request received',
                    meta: {
                        headers: JSON.stringify(request.headers),
                    },
                },
            });

            console.log('Log created:', JSON.stringify(log));
            return new Response(JSON.stringify(log), {
                headers: { 'Content-Type': 'application/json' },
            });
        } catch (error) {
            console.error('Error logging request:', error);
            return new Response('Internal Server Error', { status: 500 });
        } finally {
            await prisma.$disconnect();
        }
    },
};
