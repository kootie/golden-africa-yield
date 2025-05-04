
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { MineProject } from "@/utils/dummyData";
import { useToast } from "@/hooks/use-toast";
import { CheckIcon } from 'lucide-react';

interface InvestmentFormProps {
  project: MineProject;
}

const formSchema = z.object({
  amount: z.number().min(100, {
    message: "Investment must be at least $100",
  }).max(500000, {
    message: "Investment cannot exceed $500,000",
  }),
});

const InvestmentForm = ({ project }: InvestmentFormProps) => {
  const { toast } = useToast();
  const [sliderValue, setSliderValue] = useState(5000);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 5000,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Investment Submitted",
        description: `Your investment of $${values.amount.toLocaleString()} in ${project.name} has been received.`,
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleSliderChange = (value: number[]) => {
    const newValue = value[0];
    setSliderValue(newValue);
    form.setValue("amount", newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || 0;
    setSliderValue(newValue);
    form.setValue("amount", newValue);
  };

  const estimatedReturn = (sliderValue * project.returnRate / 100).toFixed(2);
  
  return (
    <Card className="p-6 border border-gray-200">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-navy-dark mb-2">Invest in this Project</h3>
        <p className="text-gray-600 text-sm">
          Join {project.investors} investors funding this verified gold mining operation.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Investment Amount</FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">$</span>
                      <Input
                        type="number"
                        min={100}
                        max={500000}
                        value={sliderValue}
                        onChange={handleInputChange}
                        className="flex-1"
                      />
                    </div>
                    
                    <Slider
                      defaultValue={[5000]}
                      max={100000}
                      min={100}
                      step={100}
                      value={[sliderValue]}
                      onValueChange={handleSliderChange}
                      className="py-4"
                    />
                    
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>$100</span>
                      <span>$100,000</span>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Estimated Annual Return</span>
              <span className="font-bold text-gold-dark">${estimatedReturn}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Return Rate</span>
              <span className="font-semibold">{project.returnRate}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-semibold">Credit Card / Crypto</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center text-xs text-gray-600">
              <CheckIcon size={16} className="text-green-500 mr-2" />
              <span>Verified by independent auditors</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <CheckIcon size={16} className="text-green-500 mr-2" />
              <span>Blockchain-secured data transparency</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <CheckIcon size={16} className="text-green-500 mr-2" />
              <span>Quarterly distributions based on production</span>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gold hover:bg-gold-dark text-navy-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Invest Now"}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default InvestmentForm;
