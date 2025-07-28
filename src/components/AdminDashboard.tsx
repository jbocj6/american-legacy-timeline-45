import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Download, LogOut, RefreshCw } from 'lucide-react';

interface NewsletterSignup {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  zip: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const [signups, setSignups] = useState<NewsletterSignup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchSignups = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('newsletter_signups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          title: "Error",
          description: "Failed to fetch newsletter signups",
          variant: "destructive",
        });
      } else {
        setSignups(data || []);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'ZIP Code', 'Signup Date'];
    const csvContent = [
      headers.join(','),
      ...signups.map(signup => [
        `"${signup.name}"`,
        `"${signup.email}"`,
        `"${signup.phone || ''}"`,
        `"${signup.zip || ''}"`,
        `"${new Date(signup.created_at).toLocaleDateString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `newsletter_signups_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download Complete",
      description: "Newsletter signups CSV has been downloaded",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
  };

  useEffect(() => {
    fetchSignups();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/3 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Newsletter Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage newsletter signups</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={fetchSignups} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button onClick={downloadCSV} disabled={signups.length === 0}>
              <Download className="h-4 w-4 mr-2" />
              Download CSV
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Newsletter Signups ({signups.length})</CardTitle>
            <CardDescription>
              View and download all newsletter signup data
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <RefreshCw className="h-6 w-6 animate-spin" />
              </div>
            ) : signups.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No newsletter signups found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>ZIP Code</TableHead>
                      <TableHead>Signup Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {signups.map((signup) => (
                      <TableRow key={signup.id}>
                        <TableCell className="font-medium">{signup.name}</TableCell>
                        <TableCell>{signup.email}</TableCell>
                        <TableCell>{signup.phone || '-'}</TableCell>
                        <TableCell>{signup.zip || '-'}</TableCell>
                        <TableCell>
                          {new Date(signup.created_at).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;