// Queries
export async function getProfiles(root, args, context): Promise<any> {
    try {
        const { pool } = context
        const result = await pool.query(`SELECT profile_name, activation, amt_password, cira_config_name, mebx_password, tags, dhcp_enabled FROM profiles`, [])
        if (args.name != null) {
            return result.rows.filter(row => row.name === args.name)
        }
        return result.rows
    } catch (error) {
        console.log(error)
        throw new Error('Failed to get profiles')
    }
}

//  Mutations
export async function createProfile(root, args, context): Promise<any> {
    const { pool } = context
    try {
        const result = await pool.query('INSERT INTO profiles(profile_name, activation, amt_password, cira_config_name, mebx_password, tags, dhcp_enabled) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [
                args.name,
                args.activation,
                args.amtPassword, 
                args.ciraConfig, 
                args.mebxPassword, 
                args.tags, 
                args.dhcpEnabled
            ])
        return result.rows[0]
    } catch (err) {
        console.log(err)
        throw new Error('Failed to insert profile')
    }
}

export async function deleteProfile(root, args, context) {
    const { pool } = context
    try {
        const result = await pool.query('DELETE FROM profiles WHERE profile_name = $1', [args.name])
    } catch (err) {
        console.log(err)
        throw new Error('Failed to delete profile')
    }
}