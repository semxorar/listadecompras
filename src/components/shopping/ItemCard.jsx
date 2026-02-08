import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const categoryColors = {
  'Alimentos': 'bg-amber-100 text-amber-800',
  'Bebidas': 'bg-blue-100 text-blue-800',
  'Higiene': 'bg-purple-100 text-purple-800',
  'Limpeza': 'bg-cyan-100 text-cyan-800',
  'Padaria': 'bg-orange-100 text-orange-800',
  'Açougue': 'bg-red-100 text-red-800',
  'Hortifruti': 'bg-green-100 text-green-800',
  'Outros': 'bg-gray-100 text-gray-800'
};

export default function ItemCard({ item, onUpdateQuantity, onDelete }) {
  const handleIncrease = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden border-l-4 border-l-emerald-500 hover:shadow-lg transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                <Badge className={`${categoryColors[item.category]} text-xs`}>
                  {item.category}
                </Badge>
              </div>
              <p className="text-sm text-gray-600">
                R$ {item.price.toFixed(2)} x {item.quantity}
              </p>
              <p className="text-lg font-bold text-emerald-600 mt-1">
                R$ {item.subtotal.toFixed(2)}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleDecrease}
                  disabled={item.quantity <= 1}
                  className="h-8 w-8 hover:bg-gray-200"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleIncrease}
                  className="h-8 w-8 hover:bg-emerald-100"
                >
                  <Plus className="h-4 w-4 text-emerald-600" />
                </Button>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => onDelete(item.id)}
                className="h-8 w-8 hover:bg-red-100 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
