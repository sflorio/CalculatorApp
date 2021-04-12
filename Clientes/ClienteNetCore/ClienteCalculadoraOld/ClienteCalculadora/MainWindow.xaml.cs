using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Windows;
using System.Windows.Controls;

namespace ClienteCalculadora
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private string input { get; set; }
        private IDictionary operators = new Dictionary<string, string> (){ 
            { "btnAc", "" },
            { "btnDiv", "/" },
            { "btnMenos", "-" },
            { "btnDecimal", "," },
            { "btnMulti", "*" },
            { "btnMas", "+" },
            { "btnPotencia", "^" } 
        };

        public MainWindow()
        {
            InitializeComponent();
        }

        private void ClickOperation(object sender, RoutedEventArgs e)
        {
            var buttonName = (sender as Button).Name;

            if (buttonName == "btnAc")
            {
                input = string.Empty;
                this.lblInput.Content = input;
                this.lblResult.Content = input;
                return;
            }
            if (buttonName == "btnIgual")
            {
                var response = SendMessageServer(input);
                this.lblResult.Content = response;
                return;
            }

            if (!operators.Contains(buttonName))
            {
                input += ((sender as Button).Content as Label).Content.ToString();
                this.lblInput.Content = input;
            }
            else
            {
                input += operators[buttonName];
                this.lblInput.Content = input;
            }
        }

        private string SendMessageServer(string message)
        {
            // https://archive.codeplex.com/?p=socketio4net
            // Result
            string response;
            // Data buffer for incoming data.  
            byte[] bytes = new byte[1024];

            // Connect to a remote device.  
            try
            {
                // Establish the remote endpoint for the socket.  
                IPHostEntry ipHostInfo = Dns.GetHostEntry(Dns.GetHostName());
                //IPHostEntry ipHostInfo = Dns.GetHostEntry("181.169.80.107");
                IPAddress ipAddress = ipHostInfo.AddressList[0];
                // IPAddress ipAddress = IPAddress.Parse("181.169.80.107");
                IPEndPoint remoteEP = new IPEndPoint(ipAddress, 5896);

                // Create a TCP/IP  socket.  
                Socket sender = new Socket(ipAddress.AddressFamily,
                    SocketType.Stream, ProtocolType.Tcp);

                // Connect the socket to the remote endpoint. Catch any errors.  
                try
                {
                    sender.Connect(remoteEP);

                    Console.WriteLine("Socket connected to {0}",
                        sender.RemoteEndPoint.ToString());

                    // Encode the data string into a byte array.  
                    byte[] msg = Encoding.ASCII.GetBytes(message);

                    // Send the data through the socket.  
                    int bytesSent = sender.Send(msg);

                    // Receive the response from the remote device.  
                    int bytesRec = sender.Receive(bytes);

                    response = Encoding.ASCII.GetString(bytes, 0, bytesRec);

                    // Release the socket.  
                    sender.Shutdown(SocketShutdown.Both);
                    sender.Close();

                }
                catch (ArgumentNullException ane)
                {
                    response = "Error: " + ane.ToString();
                }
                catch (SocketException se)
                {
                    response = "Error: " + se.ToString();
                }
                catch (Exception e)
                {
                    response = "Error: " + e.ToString();
                }

            }
            catch (Exception e)
            {
                response = "Error: " + e.ToString();
            }

            return response;
        }

    }

}
