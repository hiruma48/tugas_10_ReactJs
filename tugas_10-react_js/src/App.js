import { Component } from "react";
import "semantic-ui-css/semantic.min.css"
import { Button, Container, Divider, Flag, Grid, Header, Icon, Image, Input, Label } from "semantic-ui-react";



class App extends Component{
  render(){
    return(
      <div>
        <Grid container columns={3}>
        <Grid.Column>
          <Flag name="id"/>
          <Icon name="chevron left"/>
          <Icon name="chevron right"/>
        </Grid.Column>
        <Grid.Column>
        <Input type="text" placeholder="search" icon={<Icon name="star"/>} fluid/>
        </Grid.Column>
        <Grid.Column>
        <Header as="h3" color="black" textAlign="right">
              <Image src=" https://react.semantic-ui.com/images/avatar/large/patrick.png" circular/>
              patrick
            </Header>
        </Grid.Column>
        </Grid>
        <Divider horizontal>SELAMAT DATANG!!!!</Divider>
        <Container textAlign="right">
        <Label as='a' color='teal' labelposition="right" tag>
            SPORT
         </Label>
        </Container>
          
        <br/>
        <Container textAlign="center">
          Ducati tengah menunggu sidang pengadilan banding FIM tentang komponen aerodinamis .Andai gugatan para rivalnya diterima,akankah Ducati akan melanjutkan ke CAS (Pengadilan
          Arbitrase Olahraga)? Suzuki,Honda,KTM dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama 
          MotoGP 2019 di qatar karena dianggap ilegal.Pada proses nya ,Dovizioso tampil sebagai pemenang usai mengalahkan Marc Marquez.Keempat team meyakini,komponen itu memiliki 
          fungsi aerodinamis,dan menghasilakan downforce yang membantu motor melesat di trek.Sementara Ducati bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah disetujui 
          Technical Director sebelum balapan.Pada awalnya , protes keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke pengadilan Banding FIM .Sidang itu sendiri akan dilakukan 
          sebelum seri kedua di argrntina digelar pada 29-30 Maret mendatang.Manajer umum Ducati Gigi Dall'igna berkukuh tidak ada yang ilegal dengan komponen itu.Namun, seandainya 
          pengadilan mengabulkan gugatan tersebut Ducati akan mempertimbangkan melanjutkan kasus ini ke CAS "Di dalam fedrasi,derajatnya berakhir di Pengadilan Banding FIM.Anda harus 
          pergi ke CAS,yang adalah pengadilan olahraga tapi didalam kasus ini Anda keluar dari parimeter FIM "Dall'igna mengungkapkan kepada MotoGP.com ."saya bahkan tidak ingin 
          memikirkan sampai titik ini.kami sangat yakin bahwa kami tidak melanggar regulasi kok,dan yakin kami tidak melihat adanya alasan mengapa pengadilan banding bisa memutuskan secara berbeda"  
        </Container>
        <br/>
        <Container textAlign="center">
        <Button
      color='teal'
      content='Tambah tautan ke list'
      icon='add'
      labelPosition='left'
    />
        </Container>
       
        
      </div>
     
    )
  }
}

export default App;
