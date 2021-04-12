using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
//using System.Net;
//using System.Net.Sockets;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using SocketIOClient;
using H.Socket.IO;

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
        
        const string RequestEventName = "data";
        const string ResponseEventName = "data";
        const string Server = "http://127.0.0.1";
        const string Port = "5896";
        //Client socket = new Client($"{Server}:{Port}/socket.io/?EIO=4&transport=websocket");
        SocketIoClient socket = new SocketIoClient();
        public MainWindow()
        {

            socket.ConnectAsync(new Uri($"{Server}:{Port}"));
            //System.Net.WebRequest.DefaultWebProxy = null;
            InitializeComponent();

            //socket.On("connect", (fn) =>
            //{
            //    Console.WriteLine("\r\nConnected event...\r\n");

            //});

            // register for 'update' events - message is a json 'Part' object
            socket.On(ResponseEventName, (data) =>
            {
                Console.WriteLine("recv [socket].[update] event");

                // cast message as Part - use type cast helper
                //this.lblResult.Content = data.MessageText;

                this.Dispatcher.Invoke(() =>
                {
                    this.lblResult.Content = data;
                });

                

            });

            // make the socket.io connection
//            socket.Connect();

        }

        private async void ClickOperation(object sender, RoutedEventArgs e)
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
                SendMessageServer(input);
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
        
        public void SendMessageServer(string message)
        {
            Console.WriteLine("Emiting message to the server...");
            socket.Emit(RequestEventName, message);
        }

    }

}
