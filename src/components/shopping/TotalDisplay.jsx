import React from 'react';
import { Card } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TotalDisplay({ total, itemCount }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      key={total}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-xl sticky top-4 z-10">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium mb-1">Total da Compra</p>
              <p className="text-4xl font-bold">R$ {total.toFixed(2)}</p>
              <p className="text-emerald-100 text-sm mt-2">
                {itemCount} {itemCount === 1 ? 'item' : 'itens'}
              </p>
            </div>
            <div className="bg-white/20 p-4 rounded-full">
              <ShoppingCart className="w-8 h-8" />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
