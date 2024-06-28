export const jsonParse = (data: any) => {
    return {
        id: data.id,
        agent: data?.agent,
        bio_data: JSON.parse(data?.bio_data || '{}'),
        business_kyc: JSON.parse(data?.business_kyc || '{}'),
        financial_data: JSON.parse(data?.financial_data || '{}'),
        request: JSON.parse(data?.request || '{}'),
        createdAt: data.createdAt,
        updatedAt: data.updatedAt
    }
}
export const jsonStringify = (data: any) => {
    return {
        agent: data.agent,
        bio_data: JSON.stringify(data.bio_data || {}),
        business_kyc: JSON.stringify(data.business_kyc || {}),
        financial_data: JSON.stringify(data.financial_data || {}),
        request: JSON.stringify(data.request || {}),
    };
}
