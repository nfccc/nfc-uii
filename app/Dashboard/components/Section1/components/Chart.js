"use client";

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart";

const initialChartData = [
  { time: "00:00", price: 0 },
  { time: "00:05", price: 0 },
  { time: "00:10", price: 0 },
  { time: "00:15", price: 0 },
  { time: "00:20", price: 0 },
];

const chartConfig = {
  desktop: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
};

export function Component() {
  const [chartData, setChartData] = useState(initialChartData);

  useEffect(() => {
    (async () => {
      try {
        // Dynamically import the module
        const { default: DerivAPIBasic } = await import('@deriv/deriv-api');

        // Make sure to check the actual API usage from the documentation
        const app_id = 62275; // Your app_id
        const connection = new WebSocket(
          `wss://ws.derivws.com/websockets/v3?app_id=${app_id}`
        );
        const api = new DerivAPIBasic({ connection });

        // Connect to the API
        await api.init();
        console.log("API initialized.");

        // Subscribe to tick data
        api.subscribe({ ticks: "R_50" });
        console.log("Subscribed to ticks.");

        // Handle incoming messages from the API
        connection.onmessage = (message) => {
          const data = JSON.parse(message.data);
          if (data.tick) {
            const tickTime = new Date(data.tick.epoch * 1000)
              .toTimeString()
              .slice(0, 5); // Format time as hh:mm
            const tickPrice = data.tick.quote;

            // Update chartData with new tick
            setChartData((prevData) => [
              ...prevData.slice(1), // Remove the oldest data point
              { time: tickTime, price: tickPrice }, // Add new data point
            ]);
          }
        };

        connection.onerror = (error) => {
          console.error("WebSocket error:", error);
        };

        connection.onclose = () => {
          console.log("WebSocket connection closed");
        };
      } catch (error) {
        console.error("Error loading DerivAPIBasic:", error);
      }
    })();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Volatility</CardTitle>
        <CardDescription>Live tick data</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="price"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing live tick data for the last 5 updates
        </div>
      </CardFooter>
    </Card>
  );
}
