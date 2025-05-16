import { PrismaClient } from "@prisma/client";
import fs from 'fs';
import { stringify } from "querystring";



const prisma = new PrismaClient();

const load_database = async( req, res )=>{ 

    const data = JSON.parse( fs.readFileSync( 'database/all-products-without-id.txt', 'utf-8' ));

        try {

            const allProduct = await prisma.supermarket_list_db.findMany();

            res.status( 200 ).json( allProduct );

            if( allProduct.length === 115 ){ // Esta puesto el 115 porque esa era el numero de producto ya aumento

                console.log('Voy a cargar la base de datos');

                const database = await prisma.supermarket_list_db.createMany({data: data})

                await res.status( 200 ).json( database )

                return

            }

        } catch ( error ){

            res.status( 500 ).json( {error: error.message} )
        }

    
};

export {
    load_database,
}