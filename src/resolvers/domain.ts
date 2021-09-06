// Queries
export async function getDomains (root, args, context): Promise<any> {
    try {
      const { pool } = context
      const result = await pool.query(`
      SELECT name, domain_suffix, provisioning_cert, provisioning_cert_key from domains 
      ORDER BY name 
      LIMIT $1 OFFSET $2`, [args.first, args.offset])
      if (args.name != null) {
        return result.rows.filter(row => row.name === args.name)
      }
      return result.rows
    } catch (error) {
      console.log(error)
      throw new Error('Failed to get domains')
    }
  }

//  Mutations
export async function createDomain (root, args, context): Promise<any> {
  const { pool } = context
  try {
    const result = await pool.query(`
    INSERT INTO domains(name, domain_suffix, provisioning_cert, provisioning_cert_key) VALUES ($1, $2, $3, $4) RETURNING *`, 
    [
      args.domainInput.name, 
      args.domainInput.domainSuffix, 
      args.domainInput.provisioningCert, 
      args.domainInput.provisioningCertKey
    ])
    return result.rows[0]
  } catch (err) {
    console.log(err)
    throw new Error('Failed to insert domain')
  }
}

export async function deleteDomain (root, args, context) {
  const { pool } = context
  try {
    const result = await pool.query('DELETE FROM domains WHERE Name = $1', [args.name])
  } catch (err) {
    console.log(err)
    throw new Error('Failed to delete domain')
  }
}