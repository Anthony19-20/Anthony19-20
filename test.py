import matplotlib.pyplot as plt
U=[0.0, 0.22, 0.42, 0.60, 0.76, 0.90, 1.03, 1.16, 1.27, 1.45, 1.79, 1.99, 2.19, 2.26, 2.28, 2.30]
t=[0.0, 100, 200, 300, 400, 500, 600, 700, 800, 1000, 1500, 2000, 3000, 4000, 5000, 7000]
plt.plot(t, U, linestyle=':', color='r', marker='+')
plt.grid()
plt.xlabel("Temps")
plt.ylabel("Tension")
plt.title("Titre")
plt.show()
print("Energie emmagasinée :", E,"J")
print("Alex est le boss")
