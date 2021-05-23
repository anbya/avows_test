const { signIn } = React.useContext(AuthContext);
class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EMAIL: "",
      PASS: "",
      mainView:"flex",
      loadingView:"none"
    };
  }
  hideLoading = () => {
    this.setState({
      mainView:"flex",
      loadingView:"none"
    });
  };
  handleSubmit = async () => {
    _storeData('userToken',this.state.EMAIL).then(()=>{
      this.setState({
        mainView:"none",
        loadingView:"flex"
      });
      // this.props.dispatch({ type: "USER_INFO", payload: this.state.EMAIL });
    });
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{display:this.state.loadingView}}>
          <BarIndicator color='#019cde' />
        </View>
        <Content style={{paddingLeft:25,paddingRight:25}}>
          <Form>
            <Item floatingLabel>
            <Label>Email</Label>
            <Input
            type="text"
            name="EMAIL"
            onChangeText={(text) => this.setState({ EMAIL:text})}
            required
            />
            </Item>
            <Item floatingLabel last style={{marginBottom:20}}>
            <Label>Password</Label>
            <Input
            type="text"
            name="PASS"
            onChangeText={(text) => this.setState({ PASS:text})}
            secureTextEntry={true}
            required
            />
            </Item>
            <Button title="Sign in" onPress={() => signIn()}/>
            <Text style={{textAlign:'center'}}>OR</Text>
            <Button title="Sign up" onPress={() => this.props.navigation.push('SignUp')}/>
          </Form>
        </Content>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userinfo: state.reducer.userinfo
  };
};

export default connect(mapStateToProps)(SignInScreen);