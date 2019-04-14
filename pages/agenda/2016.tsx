import React, { Fragment } from 'react'
import AgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/agendaPage'
import { SafeLink } from '../../components/global/safeLink'
import withPageMetadata from '../../components/global/withPageMetadata'
import ResponsiveVideo from '../../components/responsiveVideo'
import Sponsors from '../../components/sponsors'
import From2016 from '../../config/2016'

class Agenda2016 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2016',
      numTracks: 6,
      sessionsUrl: '/static/agenda/2016.json',
      sponsors: [],
    }
  }

  render() {
    const SessionCell = this.props.SessionCell
    return (
      <Fragment>
        <div style={{ overflow: 'initial' }}>
          <table className="agenda-row table">
            <thead>
              <tr>
                <th style={{ width: '4%' }} />
                <th style={{ width: '16%' }}>
                  <strong style={{ background: '#66ad4a' }}>Green</strong>
                  <em>K309</em>
                </th>
                <th style={{ width: '16%' }}>
                  <strong style={{ background: '#54a6d6' }}>Blue</strong>
                  <em>B214</em>
                </th>
                <th style={{ width: '16%' }}>
                  <strong style={{ background: '#ad4a54' }}>Red</strong>
                  <em>B215</em>
                </th>
                <th style={{ width: '16%' }}>
                  <strong style={{ background: '#cd9152' }}>Orange</strong>
                  <em>B218</em>
                </th>
                <th style={{ width: '16%' }}>
                  <strong style={{ background: '#e3d800' }}>Yellow</strong>
                  <em>K213</em>
                </th>
                <th style={{ width: '16%' }}>
                  <strong style={{ background: '#9e55c0' }}>Purple</strong>
                  <em>K211</em>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="breadth-row">
                <td className="time">8:00</td>
                <td colSpan={6} className="breadth">
                  Registration
                  <br />
                  <small className="room" style={{ color: 'rgb(102, 173, 74)' }}>Foyer</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">8:45</td>
                <td colSpan={6} className="breadth">
                  Welcome and housekeeping
                  <br />
                  <small className="room" style={{ color: 'rgb(102, 173, 74)' }}>K309</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:00</td>
                <SessionCell isKeynote={true} sessionId="keynote" room="K309" />
              </tr>

              <tr className="breadth-row">
                <td className="time">09:45</td>
                <td colSpan={6} className="breadth">
                  Morning Tea
                  <br />
                  <small className="room" style={{ color: 'rgb(102, 173, 74)' }}>Foyer</small>
                </td>
              </tr>

              <tr>
                <td className="time">10:00</td>
                <SessionCell sessionId="1497f72a-48b8-4844-bd8a-bb3dc988bd5f" />
                <SessionCell sessionId="64790a8b-9849-41f0-9a65-e46e4bea967a" />
                <SessionCell sessionId="9528c415-ceff-4977-ac7e-9733b5969b8f" />
                <SessionCell sessionId="06740ef2-1718-45b6-8bf1-ff3da52a3bee" />
                <SessionCell sessionId="workshop-1" />
                <SessionCell sessionId="workshop-3" />
              </tr>
              <tr className="breadth-row">
                <td className="time">10:45</td>
                <td colSpan={6} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">
                  11:00
                </td>
                <SessionCell sessionId="45418427-35c0-4192-bcb0-37762d3c23b8" />
                <SessionCell sessionId="0223d9e7-52b8-4ab0-b983-58d105865391" />
                <SessionCell sessionId="0fda50d4-e4f0-486e-a7c9-86d533eb7119" />
                <SessionCell sessionId="7bd812d4-a874-4d55-b6e2-ab45384dda53" />
                <SessionCell sessionId="workshop-1" />
                <SessionCell sessionId="workshop-3" />
              </tr>

              <tr className="breadth-row">
                <td className="time">11:45</td>
                <td colSpan={6} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">
                  12:00
                </td>
                <SessionCell sessionId="80403212-d020-4d50-805b-3f4a58b16710" />
                <SessionCell sessionId="40043a1a-3053-422c-b074-a9c2f3f124e0" />
                <SessionCell sessionId="68d2e438-694b-47d4-92d9-28ba910d45d7" />
                <SessionCell sessionId="0cdcf3d0-60a5-4ed9-af25-846819ff26da" />
                <SessionCell sessionId="f594d576-3418-433c-8a34-4ffe9b0c6fc0" />
                <SessionCell sessionId="f85d9187-5132-4c51-af7e-9e896585ad2d" />
              </tr>

              <tr className="breadth-row">
                <td className="time">12:45</td>
                <td colSpan={6} className="breadth">
                  Lunch
                  <br />
                  <small className="room" style={{ color: 'rgb(102, 173, 74)' }}>Foyer</small>
                </td>
              </tr>

              <tr>
                <td className="time">13:45</td>
                <SessionCell sessionId="02eb17b9-cf94-4742-b425-ac14fd7bbb4e" />
                <SessionCell sessionId="f2f89129-85bd-4805-b3ff-f23377c32443" />
                <SessionCell sessionId="18dae88d-468c-4cd6-b1d2-e726069f9ac3" />
                <SessionCell sessionId="e4756a6d-0ed9-47f9-b09a-a13bbd21b5ed" />
                <SessionCell sessionId="workshop-2" />
                <SessionCell sessionId="workshop-4" />
              </tr>

              <tr className="breadth-row">
                <td className="time">14:30</td>
                <td colSpan={6} className="breadth">
                  Afternoon Tea
                  <br />
                  <small className="room" style={{ color: 'rgb(102, 173, 74)' }}>Foyer</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">15:00</td>
                <SessionCell sessionId="321d7f4c-fb64-448d-a048-8494ba12bf89" />
                <SessionCell sessionId="2538ffc5-e783-4165-9c7c-0df148f251a6" />
                <SessionCell sessionId="209edccc-efd1-4469-8493-a78e448b04e0" />
                <SessionCell sessionId="aacb8c41-19ff-4062-abc2-5798e9649663" />
                <SessionCell sessionId="workshop-2" />
                <SessionCell sessionId="workshop-4" />
              </tr>

              <tr className="breadth-row">
                <td className="time">15:45</td>
                <td colSpan={6} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">16:00</td>
                <SessionCell isLocknote={true} sessionId="locknote" room="K309" />
              </tr>

              <tr className="breadth-row">
                <td className="time">16:45</td>
                <td colSpan={6} className="breadth">
                  <strong>Give aways and wrap up</strong>
                  <br />
                  <small className="room" style={{ color: 'rgb(102, 173, 74)' }}>K309</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">18:00</td>
                <td colSpan={6} className="breadth">
                  <strong>Afterparty</strong>
                  <br />
                  <br />
                  <small className="room" style={{ color: 'rgb(102, 173, 74)' }}>The Orrong Hotel</small>
                  <br />
                  <small>709 High St, Armadale VIC 3143</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 style={{ display: 'none' }}>Media</h2>

        <div className="text-center" style={{ display: 'none' }}>
          <ResponsiveVideo src={From2016.YouTubeKeynoteEmbedUrl} />
        </div>
        <br />
        <p style={{ display: 'none' }}>
          <SafeLink href={From2016.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2016.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </p>
        <Sponsors show={false} sponsors={From2016.Sponsors} />
      </Fragment>
    )
  }
}

export default withPageMetadata(AgendaPage(Agenda2016, Agenda2016.getAgendaPageParams()))
