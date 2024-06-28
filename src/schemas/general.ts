import * as yup from 'yup';

export const createMerchantRequest = yup.object({
    body: yup.object({
        request_id: yup.string().required("request_id is required! Add 'request_id' in body"),
        agent_phone: yup.string().required("agent_phone is required! Add 'agent_phone' in body"),
        merchant_phone: yup.string().required("merchant_phone is required! Add 'merchant_phone' in body"),
        is_onboarded_by_agent: yup.boolean().required("is_onboarded_by_agent is required! Add 'is_onboarded_by_agent' in body"),
        request_principal: yup.string().required("is_onboarded_by_owner is required! Add 'request_id' in body"),
        disbursement_date: yup.string().required("disbursement_date is required! Add 'disbursement_date' in body"),
        total_left: yup.string().required("total_left is required! Add 'total_left' in body"),
        image: yup.string().required("image is required! Add 'image' in body"),
        home_address: yup.string().required("home_address is required! Add 'home_address' in body"),
    }),
});
export const getMerchantRequest = yup.object({
    query: yup.object({
        agent_phone: yup.string().required("agent_phone is required! Add 'agent_phone' in query params"),
    }),
});
export const reassignMerchantRequest = yup.object({
    body: yup.object({
        request_id: yup.number().required("request_id is required! Add 'request_id' in body"),
        agent_phone: yup.string().required("agent_phone is required! Add 'agent_phone' in body"),
    }),
});
export const createAgent = yup.object({
    body: yup.object({
        first_name: yup.string().required("first_name is required! Add 'first_name' in body"),
        last_name: yup.string().required("last_name is required! Add 'last_name' in body"),
        phone: yup.string().required("phone is required! Add 'phone' in body"),
        region_id: yup.number().required("region_id is required! Add 'region_id' in body"),
    }),
});
export const createRegion = yup.object({
    body: yup.object({
        name: yup.string().required("name is required! Add 'name' in body"),
        regional_header: yup.string().optional().nullable(),
    }),
});
export const updateRegion = yup.object({
    body: yup.object({
        region_id: yup.number().required("region_id is required! Add 'region_id' in body"),
        regional_header: yup.string().required("regional_header is required! Add 'regional_header' in body"),
    }),
});
export const closeRequest = yup.object({
    body: yup.object({
        id: yup.number().required("id is required! Add 'id' in body"),
    }),
});
