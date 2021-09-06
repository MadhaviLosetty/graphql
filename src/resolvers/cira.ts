// Queries
export async function getciraconfigs(root, args, context): Promise<any> {
    try {
        const { pool } = context
        const result = await pool.query(`SELECT cira_config_name, mps_server_address, mps_port, user_name, password, common_name, server_address_format, auth_method, mps_root_certificate, proxydetails FROM ciraconfigs`, [])
        if (args.name != null) {
            return result.rows.filter(row => row.name === args.name)
        }
        return result.rows
    } catch (error) {
        console.log(error)
        throw new Error('Failed to get ciraconfigs')
    }
}

//  Mutations
export async function createciraconfig(root, args, context): Promise<any> {
    const { pool } = context
    try {
        const result = await pool.query('INSERT INTO ciraconfigs(cira_config_name, mps_server_address, mps_port, user_name, password, common_name, server_address_format, auth_method, mps_root_certificate, proxydetails) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
            [
                args.name,
                args.mpsServerAddress,
                args.mpsPort, 
                args.userName, 
                args.password, 
                args.commonName, 
                args.serverAddressFormat,
                args.authMethod,
                args.mpsRootCertificate,
                args.proxyDetails
            ])
        return result.rows[0]
    } catch (err) {
        console.log(err)
        throw new Error('Failed to insert ciraconfig')
    }
}

export async function deleteciraconfig(root, args, context) {
    const { pool } = context
    try {
        const result = await pool.query('DELETE FROM ciraconfigs WHERE ciraconfig_name = $1', [args.name])
    } catch (err) {
        console.log(err)
        throw new Error('Failed to delete ciraconfig')
    }
}