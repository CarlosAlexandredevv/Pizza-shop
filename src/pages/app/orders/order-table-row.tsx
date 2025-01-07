import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger  } from "@/components/ui/dialog";
import { TableRow, TableCell } from "@/components/ui/table";


import { Search, ArrowRight, X } from "lucide-react";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
  return (
            <TableRow>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="xs">
                            <Search className="h-3 w-3" />
                            <span className="sr-only">Detalhes do pedido</span>
                          </Button>
                      </DialogTrigger>

                      <OrderDetails/>
                      </Dialog>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      821e78f7asdhdf128h
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      há 15 minutos
                    </TableCell>
                    <TableCell>
                      
                    </TableCell>
                    <TableCell className="font-medium">
                      Carlos Alexandre Rodrigues
                    </TableCell>
                    <TableCell className="font-medium">R$ 149,90</TableCell>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <ArrowRight className="mr-2 h-3 w-3" />
                        Aprovar
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="xs">
                        <X className="mr-2 h-3 w-3" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
  );
}