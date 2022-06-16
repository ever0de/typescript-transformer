const main = async () => {
    console.log("Hi");
};

main()
    .catch(console.error)
    .finally(() => process.exit());
