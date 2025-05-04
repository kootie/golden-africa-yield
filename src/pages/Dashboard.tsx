import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableFooter,
  TableRow,
} from "@/components/ui/table"

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Investor Dashboard
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track your investments, monitor project progress, and manage your portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Total Investments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-navy-dark">$50,000</div>
                <p className="text-sm text-gray-500">Across 5 projects</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-navy-dark">$5,000</div>
                <p className="text-sm text-gray-500">+10% overall</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-navy-dark">$10,000</div>
                <p className="text-sm text-gray-500">Available for investment</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">Project Progress</h2>
            <Card>
              <CardHeader>
                <CardTitle>Project A - Gold Mine Expansion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Current Stage: Drilling</p>
                <Progress value={75} className="h-2 [&>div]:bg-gold" />
                <p className="text-sm text-gray-500 mt-2">75% Complete</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project B - New Mining Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Current Stage: Implementation</p>
                <Progress value={50} className="h-2 [&>div]:bg-gold" />
                <p className="text-sm text-gray-500 mt-2">50% Complete</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-dark mb-4">Transaction History</h2>
            <Table>
              <TableCaption>A list of your recent transactions.</TableCaption>
              <TableHead>
                <TableRow>
                  <TableHead className="text-left">Date</TableHead>
                  <TableHead className="text-left">Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Jan 1, 2024</TableCell>
                  <TableCell>Investment in Project A</TableCell>
                  <TableCell className="text-right">$10,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Dec 15, 2023</TableCell>
                  <TableCell>Received returns from Project B</TableCell>
                  <TableCell className="text-right">$1,000</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell className="text-right">$11,000</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
