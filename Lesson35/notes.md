# Context API
1. Create a context:
`
const SomeContext = createContext(defaultValue)
`
2. Add created context to the application
```
	<UserContext.Provider value={loggedInUser}>
		...
	</UserContext.Provider>
```

3. Consume the context:
`
const value = useContext(SomeContext)

`