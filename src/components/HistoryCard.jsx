import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ShoppingBag, Copy } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function HistoryCard({ list, itemCount, onCopy }) {
  return (
    <Card className="hover:shadow-lg transition-all hover:border-emerald-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-bold text-gray-900 mb-2">
              {list.name}
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(list.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
            </div>
          </div>
          <Badge className={list.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'}>
            {list.status === 'active' ? 'Ativa' : 'Concluída'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm">{itemCount} {itemCount === 1 ? 'item' : 'itens'}</span>
          </div>
          <p className="text-2xl font-bold text-emerald-600">
            R$ {list.total_amount.toFixed(2)}
          </p>
        </div>
        <Button
          onClick={() => onCopy(list.id)}
          variant="outline"
          className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-50"
        >
          <Copy className="w-4 h-4 mr-2" />
          Copiar para Nova Compra
        </Button>
      </CardContent>
    </Card>
  );
}
