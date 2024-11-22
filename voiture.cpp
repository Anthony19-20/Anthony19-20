----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#include <iostream>
using namespace std;
class AutoRadio{
private:
string radio;
public:
AutoRadio(string rad) {
radio=rad;
}
 };
class Voiture
{
private:
AutoRadio* AR;
public:
Voiture() {AR=new AutoRadio("RMC");}
~Voiture() {delete AR;}
};
int main() {
Voiture megane();
...
cout << "Programme terminé !";
return 0;
