import { api } from "@/lib/axios";
import { CancelOrderParams } from "./cancel-order";

export interface DeliverOrderParams{
    orderId: string;
}

export async function deliverOrder({orderId}: CancelOrderParams){
    await api.patch(`/orders/${orderId}/deliver`);
}