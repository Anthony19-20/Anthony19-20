#include <iostream>
using namespace std;
class Bar
{
	private:
    int baz; 
    public:
    void setBaz(int z){baz=z;}
    int getBaz(){return baz;}
};
//analyse Foo
class Foo
{
    private:
	Bar* bar;
	public:
    Foo(Bar* _bar)
    {
        bar = new Bar;
        bar->setBaz(_bar->getBaz());
    }
    ~Foo(){
    //...faut-il compléter ce destructeur?
    }
};
//analyse Fooo
class Fooo
{
    private:
	Bar bar;
	public:
    Fooo(int baz)
    {
        bar.setBaz(baz);
    }
	Fooo(const Fooo& T):bar(T.bar){}
};
int main (void){
// initialiser
	Bar B1;
	B1.setBaz(23);
//classe Foo
	Foo Foo1(&B1);
cout<<"Fin normale de programme"<<endl;
return(0);
}