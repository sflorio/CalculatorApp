   M S B A M L   `   `   `  ����M  IClienteCalculadora, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null7 clr-namespace:ClienteCalculadoraClienteCalculadora  5   	   #    ClienteCalculadora.MainWindow   5   	   \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   2local clr-namespace:ClienteCalculadora     5   	   b ^MaterialDesignThemes.Wpf, Version=4.0.0.2422, Culture=neutral, PublicKeyToken=df2a72020bd7962aFmaterialDesign1http://materialdesigninxaml.net/winfx/xaml/themes  5   	      MaterialDesignBody#���   5	   	     MaterialDesignPaper#���  5
   	   $��Medium"�5   	   $��14(�5   	     � Title$  Calculaldora UB��5   	   $	��450��6!   $	��800��6.   ��5   	   :  4MaterialDesignThemes.Wpf.MaterialDesignFontExtension  .��5      � .+�5   
   �  � ColumnDefinitions 5      �� 5      $��* �6#   �� 5      $��5 �6#   �� 5      $��* �6#   .+�5      � -   5         �Name$ grdCalculator��5      $��0��5      $��50q�5       5      �� 5      $��1* �6'   �� 5      $��1* �6'   �� 5      $��1* �6'   �� 5      $��1* �6'    � RowDefinitions 5      �� 5       $��1* �6$   �� 5!      $��1* �6$   �� 5"      $��1* �6$   �� 5#      $��1* �6$   �� 5$      $��1* �6$   .+�5&      �� -   5         ��Name$ btnAc��5&       / +MaterialDesignFloatingActionMiniLightButton#��[ 5'       � ToolTip$1 +MaterialDesignFloatingActionMiniLightButton��5(       � Cursor$
 Hand��6K   .��5)      �� $��AC��5*      $��18(�5+      ���#cb831d5,      5-      �� 5.      -   5        $ btnBracketLeft��5.      $��1��5/      #��[ 50      $1 +MaterialDesignFloatingActionMiniLightButton��51      $
 Hand��6K   .��53      �� $��18(�54      $��(��55      ���#cb831d56      57      �� 58      -   5        $ btnBracketRight��58      $��2��59      #��[ 5:      $1 +MaterialDesignFloatingActionMiniLightButton��5;      $
 Hand��6K   .��5=      �� $��)��5>      $��18(�5?      ���#cb831d5@      5A      �� 5B      -   5        $ btnDiv��5B      $��3��5C      #��[ 5D      $1 +MaterialDesignFloatingActionMiniLightButton��5E      $
 Hand��6K   .��5F      '  !MaterialDesignThemes.Wpf.PackIcon     Kind$ Division=�5G      ���#cb831d5H      5I      �� 5J      -   5        $ btnSiete��5J      $��0��5K      $��1��5L      #��[ 5M      $1 +MaterialDesignFloatingActionMiniLightButton��5N      $
 Hand��6K   .��5O      �� $��7��5P      
���   �$��23(�5R      5S      �� 5T      -   5        $ btnOcho��5T      $��1��5U      $��1��5V      #��[ 5W      $1 +MaterialDesignFloatingActionMiniLightButton��5X      $
 Hand��6K   .��5Y      �� $��8��5Z      
���   �$��23(�5\      5]      �� 5^      -   5        $ btnNueve��5^      $��2��5_      $��1��5`      #��[ 5a      $1 +MaterialDesignFloatingActionMiniLightButton��5b      $
 Hand��6K   .��5c      �� $��9��5d      
���   �$��23(�5f      5g      �� 5h      -	   5        $ btnMulti��5h      $��3��5i      $��1��5j      #��[ 5k      $1 +MaterialDesignFloatingActionMiniLightButton��5l      $
 Hand��6K   .��5m        $ Close=�5n      ���#cb831d5o      5p      �� 5q      -
   5        $ 	btnCuatro��5q      $��0��5r      $��2��5s      #��[ 5t      $1 +MaterialDesignFloatingActionMiniLightButton��5u      $
 Hand��6K   .��5v      �� $��4��5w      
���   �$��23(�5y      5z      �� 5{      -   5        $ btnCinco��5{      $��1��5|      $��2��5}      #��[ 5~      $1 +MaterialDesignFloatingActionMiniLightButton��5      $
 Hand��6K   .��5�      �� $��5��5�      
���   �$��23(�5�      5�      �� 5�      -   5        $ btnSeis��5�      $��2��5�      $��2��5�      #��[ 5�      $1 +MaterialDesignFloatingActionMiniLightButton��5�      $
 Hand��6K   .��5�      �� $��6��5�      
���   �$��23(�5�      5�      �� 5�      -   5        $ btnMenos��5�      $��3��5�      $��2��5�      #��[ 5�      $1 +MaterialDesignFloatingActionMiniLightButton��5�      $
 Hand��6K   .��5�        $ Minus=�5�      ���#cb831d5�      5�      �� 5�      -   5        $ btnUno��5�      $��0��5�      $��3��5�      #��[ 5�      $1 +MaterialDesignFloatingActionMiniLightButton��5�      $
 Hand��6K   .��5�      �� $��1��5�      
���   �$��23(�5�      5�      �� 5�      -   5        $ btnDos��5�      $��1��5�      $��3��5�      #��[ 5�      $1 +MaterialDesignFloatingActionMiniLightButton��5�      $
 Hand��6K   .��5�      �� $��2��5�      
���   �$��23(�5�      5�      �� 5�      -   5        $ btnTres��5�      $��2��5�      $��3��5�      #��[ 5�      $1 +MaterialDesignFloatingActionMiniLightButton��5�      $
 Hand��6K   .��5�      �� $��3��5�      
���   �$��23(�5�      5�      �� 5�      -   5        $ btnMas��5�      $��3��5�      $��3��5�      #��[ 5�      $1 +MaterialDesignFloatingActionMiniLightButton��5�      $
 Hand��6K   .��5�        $
 Plus=�5�      ���#cb831d5�      5�      �� 5�      -   5        $ btnCero��5�      $��0��5�      $��4��5�      #��[ 5�      $1 +MaterialDesignFloatingActionMiniLightButton��5�      $
 Hand��6K   .��5�      �� $��0��5�      
���   �$��23(�5�      5�      �� 5�      -   5        $ 
btnDecimal��5�      $��1��5�      $��4��5�      #��[ 5�      $1 +MaterialDesignFloatingActionMiniLightButton��5�      $
 Hand��6K   .��5�        $ DecimalDecrease=�5�      $
��auto��5�      $
��auto��5�      5�      �� 5�      -   5        $ btnPotencia��5�      $��2��5�      $��4��5�      #��[ 5�      $1 +MaterialDesignFloatingActionMiniLightButton��5�      $
 Hand��6K   .��5�        $ AppleKeyboardControl=�5�      ���#cb831d5�      5�      �� 5�      -   5        $ btnIgual��5�      $��3��5�      $��4��5�      #��[ 5�      $1 +MaterialDesignFloatingActionMiniLightButton��5�      $
 Hand��6K   .��5�        $ Equal=�5�      ���#cb831d5�      5�      5�      �� 5�      $��1��6   $��55��6+   $��Stretch=�66   � 5�      $��2��6   .+�5�      �� $��30q�6   $	��300��6)   .+�5�      � $��40��5�      
�������.+�5�      �� -   5         ��Name$ lblInput��5�       
���   �$��25(�5�      $��Center=�5�      $�� ��5�      5�      � 5�      $��40��6   $��0,20,0,0q�5�      
�������.+�5�      �� -   5        $ 	lblResult��5�       $��25(�5�      
���   �$��Center=�5�      $�� ��5�      5�      � 5�      $��Bottom=�6   $��	0,100,0,0q�66   .+�5�      �� .+�5�      �� 	 �� Orientation$	 
Horizontal=�6)   .+�5�   "   �� $��IP Conectada: ��5�   !   �� 5   "   -   5        $ lblIp��5   (   $��	127.0.0.1��5  %   5     �� 5     $	 
Horizontal=�6)   .+�5  "   �� $��Puerto: ��6(   �� 5  "   -   5        $ 	lblPuerto��5  (   $
��5896��6;   5     5     5     5	     5
     5     5     5     