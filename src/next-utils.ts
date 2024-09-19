import next from "next";

const PORT = Number(process.env.PORT) || 3000;

export const nextapp = next({
    dev:process.env.NODE_ENV !== 'production',
    port:PORT
})

export const nexthandler = nextapp.getRequestHandler()